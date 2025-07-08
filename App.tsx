import { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import DatePicker from "./DatePicker.android";
import TimePicker from "./TimePicker.android";

export default function CollectinDateTimeInput() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <View style={styles.container}>
      <DatePicker
        label="Pick a date, any date:"
        value={date}
        onChange={setDate}
      />
      <TimePicker
        label="Pick a time, any time:"
        value={time}
        onChange={setTime}
      />
    </View>
  );
}
