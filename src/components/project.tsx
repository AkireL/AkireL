import React from "react";
import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { projectInterface } from "../types";

const Project = ({ id, fnClear }: { id: number; fnClear: () => void }) => {
  const [item, setItem] = useState<projectInterface | null>(null);

  useEffect(() => {
    const project = projects[id];
    if (project) {
      setItem(project);
    }
  }, [id]);

  const styleResults =
    item?.results.images?.length > 1
      ? "rounded shadow-md relative flex w-full snap-x snap-mandatory overflow-x-auto pb-1"
      : "flex flex-column";
  const styleImgResults =
    item?.results.images?.length > 1 ? "w-[70%] rounded-lg" : "";
  const styleDivResults =
    item?.results.images?.length > 1 ? "shrink-0 snap-center" : "";

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-1/2">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="flex flex-column justify-between">
                    <div>
                      <h3
                        className="text-3xl text-center mb-10 font-semibold"
                        id="modal-title"
                      >
                        {item?.title}
                      </h3>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-100 hover:text-gray-500 sm:mt-0 sm:w-auto"
                        onClick={() => fnClear()}
                      >
                        x
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="">{item?.description}</div>

                    <div className="text-2xl mt-5">Roles</div>
                    <div className="mt-3">{item?.roles}</div>

                    <div className="text-2xl mt-5">Technologies</div>
                    <div className="mt-3">
                      <ul className="list-disc mx-10">
                        {item?.technologies?.frontend.map((value, i) => (
                          <li key={i}>{value}</li>
                        ))}
                      </ul>
                      <ul className="list-disc mx-10">
                        {item?.technologies?.backend.map((value, i) => (
                          <li key={i}>{value}</li>
                        ))}
                      </ul>
                    </div>
                    {item?.contribution ? (
                      <>
                        <div className="text-2xl mt-5">Contributions</div>
                        <div className="mt-3">{item.contribution}</div>
                      </>
                    ) : (
                      ""
                    )}

                    <p className="text-2xl mt-5">Results</p>
                    <div className="mt-3">
                      {item?.results.description ? (
                        <p>{item?.results?.description}</p>
                      ) : (
                        ""
                      )}

                      {item?.results.images.length > 0 ? (
                        <div className={styleResults}>
                          {item.results.images.map((item, i) => (
                            <div key={i} className={styleDivResults}>
                              <img src={item} className={styleImgResults}></img>
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {item?.experience ? (
                      <>
                        <p className="text-2xl mt-5">Challenges</p>
                        <p className="px-3 mt-3">{item?.experience}</p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
