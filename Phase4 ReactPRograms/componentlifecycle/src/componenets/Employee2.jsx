import { useEffect } from "react";

function Employee2() {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return (
    <div>
      <h3>Employee2 Component rendered</h3>
        <button onClick={() => setShowEmp2(!showEmp2)}>
        {showEmp2 ? "Hide Employee2 (Func)" : "Show Employee2 (Func)"}
      </button>

      <br />
      <br />

      {showEmp2 && <Employee2 />}
    </div>
  );
}


export default Employee2;
