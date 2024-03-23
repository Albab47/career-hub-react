import { useLoaderData, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(idInt)
    toast.success('You have successfully applied')
  }

  return (
    <div className="mb-32">
      <h2 className="text-center text-3xl font-extrabold py-8">Job details</h2>
      <div className="grid gap-4 md:grid-cols-4">
        {/* details content */}
        <div className="md:col-span-3 space-y-6 text-[#757575]">
          <p>
            <strong className="text-[#1A1919]">Job Description:</strong> {job_description}
          </p>
          <p>
            <strong className="text-[#1A1919]">Job Responsibility:</strong> {job_responsibility}
          </p>
          <p>
            <strong className="text-[#1A1919]">Educational Requirements:</strong>{" "}
            {educational_requirements}
          </p>
          <p>
            <strong className="text-[#1A1919]">Experiense:</strong> {experiences}
          </p>
        </div>
        {/* apply card */}
        <div>
          <div className="p-4 bg-[#7E90FE1A] rounded-lg">
            <h3 className="text-xl font-bold">Job Details</h3>
            <div className="divider my-1 "></div>
            {/* info 1 */}
            <div className="flex gap-1 items-center mb-3">
              <AiOutlineDollar className="size-5 text-[#7E90FE]" />
              <p>
                <span className="pr-2 text-sm md:text-lg font-medium text-[#474747]">
                  Salary :
                </span>
                <span className="text-[#757575]">{salary}</span>
              </p>
            </div>
            {/* info 2 */}
            <div className="flex gap-1">
              <LuCalendarDays className="size-6 text-[#7E90FE]" />
              <p>
                <span className="pr-2 text-sm md:text-lg font-medium text-[#474747]">
                  Job title :
                </span>
                <span className="text-[#757575]">{job_title}</span>
              </p>
            </div>
            <h3 className="text-xl font-bold mt-7">Contact Information</h3>
            <div className="divider my-1 "></div>
            {/* info 3 */}
            <div className="flex gap-1 items-center mb-3">
              <IoCallOutline className="size-5 text-[#7E90FE]" />
              <p>
                <span className="pr-2 text-sm md:text-lg font-medium text-[#474747]">
                  Phone :
                </span>
                <span className="text-[#757575]">
                  {contact_information.phone}
                </span>
              </p>
            </div>
            {/* info 4 */}
            <div className="flex gap-1 mb-3">
              <HiOutlineMail className="size-5 text-[#7E90FE]" />
              <p>
                <span className="pr-2 text-sm md:text-lg font-medium text-[#474747]">
                  Email :
                </span>
                <span className="text-[#757575]">
                  {contact_information.email}
                </span>
              </p>
            </div>
            {/* info 5 */}
            <div className="flex gap-1">
              <SlLocationPin className="size-5 text-[#7E90FE]" />
              <p>
                <span className="pr-2 text-sm md:text-lg font-medium text-[#474747]">
                  Address :
                </span>
                <span className="text-[#757575]">
                  {contact_information.address}
                </span>
              </p>
            </div>
          </div>
          <button onClick={handleApplyJob} className="btn w-full mt-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:scale-95 text-white">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
