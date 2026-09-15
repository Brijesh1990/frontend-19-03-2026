# What is npx?

`npx` is a command that comes with `npm` (Node Package Manager). It is used to run JavaScript packages directly from the command line.

## Simple meaning

- `npm` is used to install packages.
- `npx` is used to execute a package without installing it globally.

## Why is it useful?

If you want to run a tool quickly, you do not need to install it permanently on your system.

Example:

```bash
npx create-react-app my-app
```

This will:

- download the package if needed,
- run it once,
- and then remove it from the local system if not needed again.

## Difference between npm and npx

- `npm install package-name` → installs the package
- `npx package-name` → runs the package directly

## Example

```bash
npx eslint .
```

This runs ESLint without needing a global installation.

## Important points

- `npx` helps avoid global installs.
- It is very useful for testing tools and commands.
- It can also run local project scripts if they are installed in `node_modules`.

## In one line

`npx` means “execute a package” from npm without installing it globally.

---

### Real-world use in React

When creating a React app, people often use:

```bash
npx create-react-app my-app
```

This is one of the most common uses of `npx`.
