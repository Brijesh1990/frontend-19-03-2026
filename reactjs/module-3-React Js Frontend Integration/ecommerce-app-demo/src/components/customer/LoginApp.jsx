import React from 'react'

export default function LoginApp() {
  return (
    <>
  {/* clickIt login modal  */}
  <el-dialog>
    <dialog
      id="dialog1"
      aria-labelledby="dialog-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
    >
      <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
      <div
        tabIndex={0}
        className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0 -mt-15"
      >
        <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mt-3 text-center">
              <h2 className="p-3 bg-amber-500 rounded-4xl w-30 text-white text-center mx-auto text-2xl">
                clickIt
              </h2>
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                India's last minute app <br />
                <span className="font-light">Log in or Sign up</span>
              </h3>
              <div className="mt-2 p-8">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter a mobile for Login *"
                      className="w-full border border-2 border-gray-300 p-3 rounded-2xl"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      defaultValue="Continue"
                      className="bg-gray-600 text-white w-full p-3 rounded-2xl"
                    />
                  </div>
                  <p>
                    By continuing, you agree to our Terms of service &amp;
                    Privacy policy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
</>

  )
}
