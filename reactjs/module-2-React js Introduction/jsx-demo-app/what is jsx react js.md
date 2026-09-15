# What is JSX in React JS?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that lets developers write HTML-like code inside React components.

## Why JSX is used

React uses JSX to describe the structure of the user interface more clearly and readably. Instead of writing long and complex `React.createElement()` calls, we can write code like this:

```jsx
const element = <h1>Hello, React!</h1>
```

This is much easier to read than plain JavaScript alone.

## JSX looks like HTML

JSX has a tag-based structure similar to HTML:

```jsx
function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is JSX.</p>
    </div>
  )
}
```

## JavaScript expressions inside JSX

We can insert JavaScript values using curly braces `{}`:

```jsx
const name = 'Aarav'

function App() {
  return <h2>Hello, {name}!</h2>
}
```

This makes JSX dynamic and very useful for rendering data.

## JSX rules

- JSX must return a single parent element.
- Use `className` instead of `class` in React.
- Attributes use camelCase like `htmlFor`, `onClick`, `tabIndex`.
- JavaScript logic can be placed inside `{}`.
- Lists can be rendered using `.map()`.

## Example with list rendering

```jsx
const topics = ['JSX', 'Components', 'Props', 'State']

function App() {
  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic}>{topic}</li>
      ))}
    </ul>
  )
}
```

## Important idea

JSX is not HTML running in the browser directly. It is a syntax that Babel or React compiles into JavaScript objects and then renders them on the screen.

## Summary

JSX is a simpler and cleaner way to write UI code in React. It combines JavaScript logic with HTML-like structure, making component building easier and more readable.

In short:

- JSX = JavaScript + XML-like syntax
- It helps build React UI
- It allows JavaScript expressions inside markup
- It is the standard way to write components in React
