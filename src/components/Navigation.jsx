import { useState } from "react";

export default function Navigation({ currques, totalques, handlenext, saveresponse, handlesub }) {
    const [saved, setSaved] = useState(false);

    function handlenextButton() {
        setSaved(false);
        handlenext();
    }

    function handlesaveButton() {
        setSaved(true);
        saveresponse();
    }

    function handleSubmit() {
        handlesub();
    }

    return (
        <div className="flex justify-between mb-4">
            <button
                className={`bg-blue-500 text-white m-2 p-2 rounded-sm w-52 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed`}
                onClick={handlesaveButton}
                disabled={saved}
            >
                Save
            </button>
            {currques === totalques - 1 ? (
                <button
                    className="bg-blue-500 text-white m-2 p-2 rounded-sm w-52 hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            ) : (
                <button
                    onClick={handlenextButton}
                    className="bg-blue-500 text-white m-2 p-2 rounded-sm w-52 hover:bg-blue-600"
                >
                    Next
                </button>
            )}
        </div>
    );
}
