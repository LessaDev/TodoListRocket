import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';

export type TaskProps = {
  text: string;
  checked: boolean;
  handleRemove?: () => void;
  handleChangeChecked?: () => void;
};

export function Task({ text, handleRemove, checked, handleChangeChecked }: TaskProps) {
  return (
    <View className="max-w-screen mb-4 flex min-h-28 w-full flex-row items-center justify-center gap-8 rounded-md bg-gray-600 px-8 ">
      <TouchableOpacity
        className=" flex h-12 w-12 items-center justify-center "
        onPress={handleChangeChecked}>
        <View>
          {checked ? (
            <MaterialIcons name="task-alt" size={32} color="#60a5fa" />
          ) : (
            <Ionicons name="ellipse-outline" size={32} color="white" />
          )}
        </View>
      </TouchableOpacity>

      <View className="max-w-sm flex-1">
        <View>
          {checked ? (
            <Text className=" text-xl text-gray-300 line-through">{text} </Text>
          ) : (
            <Text className=" text-xl text-white ">{text} </Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        className=" flex h-12 w-12 items-center justify-center"
        onPress={handleRemove}>
        <Ionicons name="trash-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
function setTask(arg0: (prevState: any) => any[]): any {
  throw new Error('Function not implemented.');
}
