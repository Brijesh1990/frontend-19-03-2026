import React from 'react'

export default function ChangeLocationApp() {
  return (
   <>
  {/* change location or detect location modal */}
  <el-dialog>
    <dialog
      id="dialog2"
      aria-labelledby="dialog-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
    >
      <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
      <div
        tabIndex={0}
        className="w-180 mt-25 ms-5  justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
      >
        <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
          <div className="bg-white px-0 pt-0 pb-0 sm:p-6 sm:pb-4">
            <div className="mt-3 text-center">
              <h2 className="p-0  rounded-4xl w-30 text-white ms-3">
                Change location
              </h2>
              <div className="mt-2 p-0">
                <form>
                  <div className="mb-3 flex">
                    <button
                      type="button"
                      className="bg-green-600 text-white w-70 p-3 rounded-xl"
                    >
                      Detect my location
                    </button>
                    -
                    <span className="p-2 rounded-full border-2 bg-gray-100">
                      OR
                    </span>
                    -
                    <button
                      type="button"
                      className="bg-gray-400 text-white w-70 p-3"
                    >
                      Search Delivery location
                    </button>
                  </div>
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
