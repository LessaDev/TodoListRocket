import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Task, TaskProps } from './tasks/Task';

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTasks, setNewTasks] = useState('');

  // @ts-ignore
  function handleAddTask(textTask: string) {
    if (textTask === '') {
      Alert.alert('Qual a função de uma tarefa em branco?', 'Tarefa não pode ser estar sem texto!');
    } else if (tasks.map((item) => item.text === textTask).includes(true)) {
      Alert.alert('Tarefa já existe', 'Uma tarefa com o mesmo nome já existe');
    } else {
      setTasks(() => [
        ...tasks,
        {
          id: tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
          text: textTask,
          checked: false,
          modalOpen: false,
        },
      ]);
      console.log(tasks);
    }
    setNewTasks('');
  }

  function handleRemoveTask(task: TaskProps) {
    Alert.alert('Remover', `Remover a tarefa ${task.text} ?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((prevState) => prevState.filter((item) => item !== task));
          Alert.alert('Removido');
        },
      },
      { text: 'Não', style: 'cancel' },
    ]);
  }

  function handleChangeTask(task: TaskProps) {
    setTasks((prevState) =>
      prevState.map((item) => (item.id === task.id ? { ...item, checked: !item.checked } : item))
    );
  }

  function handleUpdateTextTask(task: TaskProps, updatedTaskText: string) {
    if (updatedTaskText === '') {
      Alert.alert('Tarefa não editada', 'Nome da tarefa não alterado!');
    } else if (tasks.map((item) => item.text === updatedTaskText).includes(true)) {
      Alert.alert('Tarefa já existe', 'Uma tarefa com o mesmo nome já existe');
    } else {
      setTasks((prevState) =>
        prevState.map((item) => (item.id === task.id ? { ...item, text: updatedTaskText } : item))
      );
    }
  }

  const completedTasks = tasks.filter((task) => task.checked);

  return (
    <View className="flex h-full w-full bg-gray-700 ">
      <View className="mb-20 flex h-64 w-full items-center justify-center bg-gray-800 p-10">
        <Text className="text-6xl text-white"> Logo </Text>
        <Text className="text-md text-slate-500"> "é só preguiça de colocar uma logo mesmo"</Text>
        <View className="absolute -bottom-14  flex h-28 w-full items-center justify-center py-4">
          <View className="flex  h-full w-full flex-row items-center justify-center gap-2">
            <TextInput
              className="h-full flex-1 rounded-md bg-gray-600 p-4 text-white drop-shadow-sm "
              placeholderTextColor="slategray"
              placeholder="Adcione uma tarefa"
              onChangeText={(text) => setNewTasks(text)}
              value={newTasks}
            />

            <TouchableOpacity
              className="flex  h-full w-20 items-center justify-center rounded-md bg-blue-400"
              onPress={() => handleAddTask(newTasks)}>
              <MaterialIcons name="add-circle-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="  flex gap-4 px-8">
        <View className="flex w-full flex-row items-center justify-between gap-8 border-b-2 border-gray-600 pb-6">
          <View className=" flex flex-row items-center justify-center gap-2 ">
            <Text className="p-2 text-2xl font-bold text-blue-400">Tarefas</Text>
            <View className="flex h-8  w-8 items-center justify-center rounded-full bg-gray-600 ">
              <Text className=" text-2xl text-white">{tasks.length}</Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-center gap-2 ">
            <Text className="p-2 text-2xl font-bold text-blue-400">Concluídas</Text>
            <View className="flex h-8  w-8 items-center justify-center rounded-full bg-gray-600 ">
              <Text className=" text-2xl text-white">{completedTasks.length}</Text>
            </View>
          </View>
        </View>
      </View>
      <FlatList
        className="px-8"
        data={tasks}
        keyExtractor={(item) => item.text}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            text={item.text}
            checked={item.checked}
            handleRemove={() => handleRemoveTask(item)}
            handleChangeChecked={() => handleChangeTask(item)}
            handleUpdateTextTask={(textUpdated) => handleUpdateTextTask(item, textUpdated)}
            modalOpen={item.modalOpen}
          />
        )}
        showsVerticalScrollIndicator
        ListEmptyComponent={() => (
          <View className=" flex items-center justify-center gap-6 pt-8">
            <MaterialIcons name="playlist-add" size={56} color="white" />
            <View className="flex items-center justify-center">
              <Text className="text-xl text-slate-300">
                {' '}
                Você ainda não tem nenhuma tarefa cadastrada
              </Text>
              <Text className="text-xl text-slate-300 opacity-40">
                {' '}
                Crie suas tarefas e organinze seus afazeres{' '}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
