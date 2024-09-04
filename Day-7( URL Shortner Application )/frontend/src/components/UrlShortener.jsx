import { useState } from "react";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [showShortUrl, setShowShortUrl] = useState(false);
  const [shortURL, setShortURL] = useState("");

  const handleShortURL = () => {
    console.log();
  };
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(shortURL);
    alert("Short URL copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center text-center p-4">
      <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-4">Free URL Shortener</h1>
        <p className="text-gray-400 mb-6">
          RB.GY is a free tool to{" "}
          <a href="#" className="text-blue-500">
            shorten URLs
          </a>{" "}
          powered by Rebrandly. Create short & memorable links in seconds.
        </p>
        <span className="flex items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Enter link here"
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 text-gray-900 rounded-lg border border-gray-600"
          />
          <button
            onClick={handleShortURL}
            className="w-[30%] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Shorten URL
          </button>
        </span>
        {showShortUrl && (
          <div className="mt-4 max-w-[60%] flex gap-2">
            <input
              type="text"
              readOnly
              value={"text"}
              className="outline-none w-full p-2 text-gray-900 rounded-lg border border-gray-600"
            />
            <button
              onClick={handleCopyUrl}
              className="w-full max-w-24 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Copy
            </button>
          </div>
        )}
        <p className="text-gray-400 text-sm mt-4">
          By clicking Shorten URL, you agree to Rebrandly&apos;s{" "}
          <a href="#" className="text-blue-500">
            Terms of Use
          </a>
          ,{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500">
            Cookie Policy
          </a>
          .
        </p>
      </div>

      {/* <div className="bg-blue-600 text-white rounded-lg shadow-md p-6 mt-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Take your business to the next level!
        </h2>
        <p className="mb-4">
          Want to brand your short links, create QR codes, and get detailed
          analytics? Get Rebrandly for your business and super-charge your link
          management.
        </p>
        <button className="bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100">
          Try Rebrandly
        </button>
        <p className="mt-4">
          or{" "}
          <a href="#" className="underline">
            Talk to sales
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default UrlShortener;
