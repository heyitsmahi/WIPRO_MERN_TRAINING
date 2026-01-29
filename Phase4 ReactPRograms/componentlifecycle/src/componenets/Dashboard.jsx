
console.log("Dashboard module loaded");

function Dashboard() {
  console.log("Dashboard component rendered");

  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>This page is lazy loaded ✅</p>
        <button onClick={() => setShowDash(!showDash)}>
        {showDash ? "Hide Dashboard" : "Load Dashboard"}
      </button>

      <br />
      <br />

      {showDash && (
        <Suspense fallback={<h2>Loading Dashboard...</h2>}>
          <Dashboard />
        </Suspense>
      )}

      <hr />
    </div>
  );
}

export default Dashboard;