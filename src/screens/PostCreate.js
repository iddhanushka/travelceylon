import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

const CreateArticle = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [imageUri, setImageUri] = React.useState(null);

  const onSubmit = data => {
    console.log(data);
  };

  const handleImageUpload = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Create article</Text>
        
        <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
        
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}

        <Controller
          control={control}
          name="destinationName"
          rules={{ required: 'Destination name is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Destination name *"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.destinationName && <Text style={styles.errorText}>{errors.destinationName.message}</Text>}

        <Controller
          control={control}
          name="location"
          rules={{ required: 'Location is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Location *"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.location && <Text style={styles.errorText}>{errors.location.message}</Text>}

        <Controller
          control={control}
          name="destinationType"
          rules={{ required: 'Destination type is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Destination type *"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.destinationType && <Text style={styles.errorText}>{errors.destinationType.message}</Text>}

        <Controller
          control={control}
          name="postContent"
          rules={{ required: 'Post content is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Post content *"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
        />
        {errors.postContent && <Text style={styles.errorText}>{errors.postContent.message}</Text>}

        <Button title="Create" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#080A22',
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  container: {
    backgroundColor: '#101529',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 7,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 7,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default CreateArticle;
