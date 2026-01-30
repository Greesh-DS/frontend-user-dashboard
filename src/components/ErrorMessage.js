/*
  Component to display API or the dashboard errors.

  error: string - The error message to display.
*/

function ErrorMessage({ error }) {
  return error && <p className="error">⚠️ {error}</p>;
}

export default ErrorMessage;
