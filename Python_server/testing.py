import pickle

# Assuming you have a trained model or object
model =  "./finalfinalzashion.ipynb" # Replace with your actual model or object

# Save the model as a .pkl file
with open('model.pkl', 'wb') as file:
    pickle.dump(model, file)
