import './App.css'

function App() {
  const course = 'React JS'
  const student = 'Aarav'
  const isReady = true
  const topics = [
    'JSX looks like HTML',
    'Use {} for JavaScript expressions',
    'Use className instead of class',
    'React renders the UI from components',
  ]

  return (
    <main className="jsx-demo">
      <header className="hero-card">
        <p className="eyebrow">React Basics</p>
        <h1>What is JSX?</h1>
        <p className="lead">
          JSX stands for JavaScript XML. It lets us write HTML-like code inside
          JavaScript and tells React how to build the user interface.
        </p>

        <div className="chip-row">
          {['Readable', 'Dynamic', 'Component friendly'].map((label) => (
            <span key={label} className="chip">
              {label}
            </span>
          ))}
        </div>
      </header>

      <section className="content-grid">
        <article className="panel">
          <h2>Example</h2>
          <p>
            Welcome <strong>{student}</strong> to <strong>{course}</strong>.
          </p>
          <p className={isReady ? 'status success' : 'status'}>
            {isReady ? 'JSX is ready to render.' : 'JSX is waiting.'}
          </p>

          <div className="code-box">
            <code>{`const greet = <h1>Hello, ${student}!</h1>`}</code>
          </div>
        </article>

        <article className="panel">
          <h2>Key Features</h2>
          <ul>
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
