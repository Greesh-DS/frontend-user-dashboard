// Component Definition for API Error Messages
function ErrorMessage({ error }) {
  return error && <p className="error">⚠️ {error}</p>;
}

export default ErrorMessage;
