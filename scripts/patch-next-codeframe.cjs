/**
 * Next 16.3 WASM bindings crash when formatting errors:
 * `color: true` / numeric enums are rejected (`CodeFrameColorMode`).
 * Native `@next/swc-win32-x64-msvc` also fails to load on this machine,
 * so every compile error becomes an unhandledRejection and GET / 500.
 */
const fs = require("fs")
const path = require("path")

const files = [
  path.join(__dirname, "..", "node_modules", "next", "dist", "shared", "lib", "errors", "code-frame.js"),
  path.join(__dirname, "..", "node_modules", "next", "dist", "esm", "shared", "lib", "errors", "code-frame.js"),
]

const marker = "SAFE_CODE_FRAME_PATCH"

const cjsBody = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "codeFrameColumns", {
  enumerable: true,
  get: function () { return codeFrameColumns; }
});
const _swc = require("../../../build/swc");
function codeFrameColumns(file, location, options = {}) {
  // ${marker}
  try {
    const opts = { linesAbove: options.linesAbove, linesBelow: options.linesBelow };
    if (options.maxWidth !== undefined) opts.maxWidth = options.maxWidth;
    else if (process.stdout && process.stdout.columns) opts.maxWidth = process.stdout.columns;
    return (0, _swc.getBindingsSync)().codeFrameColumns(file, location, opts);
  } catch {
    return undefined;
  }
}
`

const esmBody = `import { getBindingsSync } from '../../../build/swc';
export function codeFrameColumns(file, location, options = {}) {
  // ${marker}
  try {
    const opts = { linesAbove: options.linesAbove, linesBelow: options.linesBelow };
    if (options.maxWidth !== undefined) opts.maxWidth = options.maxWidth;
    else if (process.stdout && process.stdout.columns) opts.maxWidth = process.stdout.columns;
    return getBindingsSync().codeFrameColumns(file, location, opts);
  } catch {
    return undefined;
  }
}
`

for (const file of files) {
  if (!fs.existsSync(file)) continue
  const isEsm = file.includes(`${path.sep}esm${path.sep}`)
  fs.writeFileSync(file, isEsm ? esmBody : cjsBody)
}
