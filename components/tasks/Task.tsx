import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';

import { ModalTextTaskUpdate } from '../modal/ModalTextTaskUpdate';

export type TaskProps = {
  id: number;
  text: string;
  checked: boolean;
  modalOpen: boolean;
  handleRemove?: () => void;
  handleChangeChecked?: () => void;
  handleModalOpen?: () => void;
  handleUpdateTextTask?: (text: string) => void;
};

export function Task({
  text,
  handleRemove,
  checked,
  handleChangeChecked,
  handleUpdateTextTask,
}: TaskProps) {
  return (
    <View className="max-w-screen mb-4 flex min-h-28 w-full flex-row items-center justify-between gap-4 rounded-md bg-gray-600 px-4 ">
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

      <View>
        {checked ? (
          <Text className=" text-xl text-gray-300 line-through">{text} </Text>
        ) : (
          <Text className=" text-xl text-white ">{text} </Text>
        )}
      </View>

      <View className="flex flex-row ">
        <TouchableOpacity
          className=" flex h-12 w-12 items-center justify-center"
          onPress={handleRemove}>
          <Ionicons name="trash-outline" size={30} color="white" />
        </TouchableOpacity>
        <ModalTextTaskUpdate
          text={text}
          handleUpdateText={(text: string) =>
            handleUpdateTextTask ? handleUpdateTextTask(text) : console.log(text)
          }
        />
      </View>
    </View>
  );
}
