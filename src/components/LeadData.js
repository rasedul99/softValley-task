import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { TfiLayoutListPost } from "react-icons/tfi";
const LeadData = ({ leads }) => {
  console.log(leads);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th className="text-sm  font-medium text-gray-900  py-4 text-left">
                    <input
                      className="mx-3 my-2"
                      type="checkbox"
                      id="A3-yes"
                      name="A3-confirmation"
                      value="yes"
                    />
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Lead Name
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Phone
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Followup Date
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Last note
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Assigned
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Email
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Preferred Countries
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Status
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Source
                  </th>
                  <th className="text-sm font-medium text-gray-900  py-4 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads?.map((lead) => (
                  <tr className="border-b">
                    <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <input
                        className="mx-3 my-2"
                        type="checkbox"
                        id="A3-yes"
                        name="A3-confirmation"
                        value="yes"
                      />
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {lead.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {lead.phone}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {lead.followup_date}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {lead.last_note}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {lead.assigned}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {lead.email}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {lead.country.name}
                    </td>
                    <td
                      style={{ color: `${lead.lead_status.color}` }}
                      className="text-sm font-light  py-4 whitespace-nowrap"
                    >
                      {lead.lead_status.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {lead.source.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      <div className="flex gap-3">
                        <TfiLayoutListPost />
                        <MdEdit />
                        <AiFillDelete />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadData;
