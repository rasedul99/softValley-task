import React from "react";


const LeadData = () => {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      id="A3-yes"
                      name="A3-confirmation"
                      value="yes"
                    />
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Lead Name
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Phone
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Followup Date
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Last note
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Assigned
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Email
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Preferred Countries
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Status
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Source
                  </th>
                  <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <input
                      type="checkbox"
                      id="A3-yes"
                      name="A3-confirmation"
                      value="yes"
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadData;
