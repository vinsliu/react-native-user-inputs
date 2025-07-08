import { Text, TextInputProps, View } from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { SelectProps } from "./SelectProps";

export default function Select(props: SelectProps) {
  return (
    <View>
      <Text style={styles.pickerLabel}>{props.label}</Text>
      <Picker style={styles.picker} {...props}>
        {props.items.map((i) => (
          <Picker.Item key={i.label} {...i} />
        ))}
      </Picker>
    </View>
  );
}
