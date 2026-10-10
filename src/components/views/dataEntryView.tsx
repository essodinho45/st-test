import {DataEntryForm} from '../ui/dataEntryForm';
import {DataTable} from '../ui/dataTable';

export const DataEntryView = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <DataEntryForm />
    <DataTable />
  </div>
);
