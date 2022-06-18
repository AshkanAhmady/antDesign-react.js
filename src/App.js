import {
  DatePicker as DatePickerJalali,
  Calendar,
  JalaliLocaleListener,
} from "antd-jalali";

function App() {
  return (
    <div className="App">
      <JalaliLocaleListener />
      تاریخ: <DatePickerJalali />
      {/* رنج تاریخ: <DatePickerJalali.RangePicker />
      <Calendar /> */}
    </div>
  );
}

export default App;
