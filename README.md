# Unexpected NaN Result in Addition Function with Undefined Arguments

This repository demonstrates a common JavaScript error where a function designed to handle null values fails to properly manage undefined inputs, leading to NaN (Not a Number) results.  The bug and its solution are provided in separate JavaScript files.

## Bug Description

The `foo` function attempts to add two numbers. It correctly handles null values, returning null if either input is null. However, it does not gracefully handle undefined inputs, resulting in `NaN`. This behavior is unexpected and can lead to application errors.

## Bug Solution

The solution extends the error handling to explicitly check for `undefined` values along with `null` values, providing a consistent and predictable output in all cases. This prevents the unexpected `NaN` results and improves the robustness of the function.

## How to reproduce the bug:
1. Clone this repository
2. Run `bug.js` in a JavaScript environment. Observe the NaN output for undefined input cases.
3. Run `bugSolution.js` to see the corrected behavior.