import { useMemo, useState } from "react";
import logo from "./assets/kalam-csc-logo.png";

const LOGIN_ID = "kalam";
const LOGIN_PASSWORD = "12345";

const projects = [
  {
    name: "KALAM LEDGER",
    hindi: "डिजिटल ट्रांजैक्शन लेजर",
    icon: "📒",
    url: "https://kalamledger-46zfmw6jf-kalam5.vercel.app",
    description: "AEPS, DMT, CARD, UPI और transaction records",
  },
  {
    name: "BIJLI GHAR CASH COUNTER",
    hindi: "बिजली घर कैश काउंटर",
    icon: "⚡",
    url: "https://bijli-ghar-cash-counter-eo1xaeb0s-kalam5.vercel.app",
    description: "Daily cash counter entries और हिसाब",
  },
  {
    name: "KALAM UDHARI",
    hindi: "ग्राहक उधारी / जमा",
    icon: "💰",
    url: "https://kalam-udhari-five.vercel.app",
    description: "Customer, Udhari, Jama, DUES और ADVANCE",
  },
  {
    name: "RESUME BUILDER",
    hindi: "प्रोफेशनल रिज्यूमे",
    icon: "📄",
    url: "https://resume-rchpu88z6-kalam5.vercel.app",
    description: "Professional resume बनाने का tool",
  },
  {
    name: "KALAM PHOTO MAKER",
    hindi: "फोटो मेकर",
    icon: "📸",
    url: "https://kalam-photo-maker-smart-bdgssbijb-kalam5.vercel.app",
    description: "Passport photo, background removal और photo sheet",
  },
  {
    name: "CREDIT CARD CALCULATOR",
    hindi: "क्रेडिट कार्ड कैलकुलेटर",
    icon: "💳",
    url: "https://credit-card-transaction-calculator-fr8n9t95g-kalam5.vercel.app",
    description: "Card transaction और charges की calculation",
  },
];

function Login({ onLogin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (id === LOGIN_ID && password === LOGIN_PASSWORD) {
      sessionStorage.setItem("kalam_master_login", "yes");
      setError("");
      onLogin();
    } else {
      setError("Login ID या Password गलत है।");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <img
          className="login-logo"
          src={logo}
          alt="KALAM CSC CENTER"
        />

        <div className="login-brand">
          KALAM CSC CENTER
        </div>

        <h1>KALAM MASTER DASHBOARD</h1>

        <p className="login-subtitle">
          Login करके अपना dashboard खोलें
        </p>

        <form onSubmit={handleLogin}>

          <label>Login ID</label>

          <input
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder="Login ID"
            autoComplete="username"
            autoFocus
          />

          <label>Password</label>

          <div className="password-wrap">

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              autoComplete="current-password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "छुपाएँ" : "दिखाएँ"}
            </button>

          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            className="login-button"
            type="submit"
          >
            LOGIN →
          </button>

        </form>

        <div className="login-footer">
          KALAM CSC CENTER • Secure Access
        </div>

      </div>
    </div>
  );
}

function Dashboard({ onLogout }) {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return projects;
    }

    return projects.filter((project) =>
      `${project.name} ${project.hindi} ${project.description}`
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  return (
    <div className="app">

      <header className="hero">

        <img
          className="brand-mark"
          src={logo}
          alt="KALAM CSC CENTER"
        />

        <div className="hero-content">

          <div className="eyebrow">
            KALAM CSC CENTER
          </div>

          <h1>
            KALAM MASTER DASHBOARD
          </h1>

          <p>
            सारे काम एक ही जगह से खोलें
          </p>

        </div>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          LOGOUT
        </button>

      </header>

      <main className="container">

        <section className="welcome">

          <div>
            <span className="welcome-label">
              WELCOME
            </span>

            <h2>
              आप कौन सा काम करना चाहते हैं?
            </h2>

            <p>
              नीचे दिए गए किसी भी tool पर क्लिक करके सीधे अपनी site खोलें।
            </p>
          </div>

          <div className="search-box">

            <span>
              🔎
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Project खोजें..."
            />

          </div>

        </section>

        <section className="grid">

          {filteredProjects.map((project) => (

            <a
              className="project-card"
              href={project.url}
              key={project.name}
            >

              <div className="card-top">

                <div className="icon">
                  {project.icon}
                </div>

                <span className="open">
                  OPEN ↗
                </span>

              </div>

              <h3>
                {project.name}
              </h3>

              <div className="hindi">
                {project.hindi}
              </div>

              <p>
                {project.description}
              </p>

              <div className="card-action">

                <span>
                  काम शुरू करें
                </span>

                <span className="arrow">
                  →
                </span>

              </div>

            </a>

          ))}

        </section>

        {filteredProjects.length === 0 && (
          <div className="empty">
            कोई project नहीं मिला।
          </div>
        )}

        <footer>

          <strong>
            KALAM CSC CENTER
          </strong>

          <span>•</span>

          <span>
            Simple Kaam • Behtar Vyapar
          </span>

        </footer>

      </main>

    </div>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    () =>
      sessionStorage.getItem("kalam_master_login") === "yes"
  );

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("kalam_master_login");
    setLoggedIn(false);
  };

  return loggedIn ? (
    <Dashboard onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
}