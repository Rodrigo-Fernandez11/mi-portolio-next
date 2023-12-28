"use client";
export const ContactForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div>
        <label className="font-medium">Full name</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Email</label>
        <input
          type="email"
          required
          className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Company</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Message</label>
        <textarea
          required
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        ></textarea>
      </div>
      <button className="w-full px-4 py-2  font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
        Submit
      </button>
    </form>
  );
};
