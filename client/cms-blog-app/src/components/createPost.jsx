export function CreatePost({setForm, form, formSubmit, formDraft , titleVal, postVal, isDraftPost}) {
  return (
      <div className="w-full max-w-5xl bg-white dark:bg-[#0f172a] backdrop-blur-md shadow-2xl rounded-xl border border-white/30 dark:border-slate-700/50">
        {/* Header */}
        <div className="px-6 sm:px-10 pt-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
           {isDraftPost? "Publish Draft Posts":"Create New Post"}
          </h1>
          <p className="mt-1 text-sm dark:text-slate-300">
            Write your story. Save as draft or publish when ready.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={formSubmit} 
            className="px-6 sm:px-10 pb-8 pt-6 space-y-6">
          {/* Title (floating label) */}
          <div className="relative">
            <input
              type="text"
              id="title"
              value={titleVal && titleVal}
              placeholder=" "
              onChange={(e)=>setForm({...form, title: e.target.value})}
              className="peer w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="title"
              className="absolute left-3 top-3 text-slate-500 dark:text-slate-300 text-sm transition-all
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400
                         peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Title
            </label>
          </div>

          {/* Content (floating label) */}
          <div className="relative">
            <textarea
              id="content"
              rows="8"
              placeholder=" "
              value={postVal && postVal}
              onChange={(e)=>setForm({...form, post: e.target.value})}
              className="peer w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent p-4 text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
            <label
              htmlFor="content"
              className="absolute left-3 top-3 text-slate-500 dark:text-slate-300 text-sm transition-all
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400
                         peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Post
            </label>
          </div>

          
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3">
          {isDraftPost?"" : <button
            onClick={formDraft}
              type="button"
              className="w-full sm:w-auto rounded-lg border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 text-slate-800 dark:text-white px-5 py-2.5 shadow hover:bg-white dark:hover:bg-slate-800 transition"
            >
              Save as Draft
            </button>
            }
            <button
              type="submit"
              className="w-full sm:w-auto rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 shadow transition"
            >
              Publish
            </button>
        
          </div>
        </form>
      </div>
  );
}
