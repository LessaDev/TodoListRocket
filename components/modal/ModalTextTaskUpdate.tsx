import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Modal, Pressable, Text, View, TextInput, TouchableOpacity } from 'react-native';

type ModalProps = {
  text: string;
  handleUpdateText: (text: string) => void;
};

export function ModalTextTaskUpdate({ text, handleUpdateText }: ModalProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedText, setUpdatedText] = useState('');

  function handleSave() {
    handleUpdateText(updatedText);
    setModalVisible(false);
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        className="flex items-center justify-center ">
        <View className="flex h-full w-full  items-center justify-center p-12">
          <View className="flex w-full flex-col items-center justify-center gap-5 rounded-md bg-white p-8 ">
            <Text className="mb-4">Altere o nome da sua tarefa</Text>

            <TextInput
              className="drrop-shadow-sm flex w-full rounded-md bg-gray-600 p-4 text-white"
              onChangeText={(text) => setUpdatedText(text)}
              defaultValue={text}
            />
            <View className="flex flex-row gap-5">
              <Pressable
                className="flex items-center justify-center rounded-md bg-blue-400 p-5"
                onPress={() => setModalVisible(!modalVisible)}>
                <Text className="font-bold text-white">Cancelar</Text>
              </Pressable>
              <TouchableOpacity
                className="flex items-center justify-center rounded-md bg-blue-400 p-5"
                onPress={handleSave}>
                <Text className="font-bold text-white">Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        className=" flex h-12 w-12 items-center justify-center"
        onPress={() => setModalVisible(true)}>
        <Ionicons name="pencil-outline" size={30} color="white" />
      </Pressable>
    </>
  );
}
