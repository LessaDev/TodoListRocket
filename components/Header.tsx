import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Header = () => {
  return (
    <View className="relative mb-20 flex h-64 w-full items-center justify-center bg-gray-800 p-10 ">
      <Text className="text-6xl text-white"> "Logo"</Text>
      <View className="absolute -bottom-1/4  flex h-28 w-full items-center justify-center py-4">
        <View className="flex h-full w-full flex-row items-center justify-center gap-2">
          <TextInput
            className="h-full flex-1 rounded-md bg-gray-600 p-4 drop-shadow-sm "
            placeholderTextColor="slategray"
            placeholder="Adcione uma tarefa"
          />

          <TouchableOpacity className="flex  h-full w-20 items-center justify-center rounded-md bg-blue-400">
            <MaterialIcons name="add-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
