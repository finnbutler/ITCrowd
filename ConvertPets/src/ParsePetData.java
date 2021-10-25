import java.util.LinkedList;
import java.io.File;
import java.io.FileWriter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

import org.json.*;

/**
 * Takes the name of a pet data JSON file and creates a SQL INSERT file based on the pet data.
 */
public class ParsePetData {
    public static void main(String[] args) {
        LinkedList<PetData> allPetData = new LinkedList<>();
        StringBuilder jsonString = new StringBuilder();

        // Read JSON file
        try {
            File jsonFile = new File(args[0]);
            Scanner scanner = new Scanner(jsonFile);
            while (scanner.hasNextLine()) {
                jsonString.append(scanner.nextLine());
            }
        } catch (FileNotFoundException e) {
            System.out.println("Invalid json file");
            e.printStackTrace();
        }

        // Parse JSON into PetData
        JSONObject json = new JSONObject(jsonString.toString());
        JSONArray animals = json.getJSONArray("animals");
        for (int i = 0; i < animals.length(); i++) {
            JSONObject animal = animals.getJSONObject(i);

            int id = animal.getInt("id");

            String type = getJSONStringNulls(animal, "type");
            String species = getJSONStringNulls(animal, "species");
            String name = getJSONStringNulls(animal, "name");
            String description = getJSONStringNulls(animal, "description");

            JSONObject breeds = animal.getJSONObject("breeds");
            String breedPrimary = getJSONStringNulls(breeds, "primary");
            String breedSecondary = getJSONStringNulls(breeds, "secondary");
            Boolean breedIsMixed = getJSONBooleanNulls(breeds, "mixed");
            Boolean breedIsUnknown = getJSONBooleanNulls(breeds, "unknown");

            JSONObject colours = animal.getJSONObject("colors");
            String colourPrimary = getJSONStringNulls(colours, "primary");
            String colourSecondary = getJSONStringNulls(colours, "secondary");
            String colourTertiary = getJSONStringNulls(colours, "tertiary");

            String age = getJSONStringNulls(animal, "age");
            String birthDate = null;
            String sex = getJSONStringNulls(animal, "gender");
            String size = getJSONStringNulls(animal, "size");
            String coat = getJSONStringNulls(animal, "coat");

            JSONObject attributes = animal.getJSONObject("attributes");
            JSONObject environment = animal.getJSONObject("environment");
            Boolean isSpayedOrNeutered = getJSONBooleanNulls(attributes, "spayed_neutered");
            Boolean isHouseTrained = getJSONBooleanNulls(attributes, "house_trained");
            Boolean isDeclawed = getJSONBooleanNulls(attributes, "declawed");
            Boolean isSpecialNeeds = getJSONBooleanNulls(attributes, "special_needs");
            Boolean isShotsCurrent = getJSONBooleanNulls(attributes, "shots_current");
            Boolean isFriendlyToChildren = getJSONBooleanNulls(environment, "children");
            Boolean isFriendlyToDogs = getJSONBooleanNulls(environment, "dogs");
            Boolean isFriendlyToCats = getJSONBooleanNulls(environment, "cats");

            JSONArray photos = animal.getJSONArray("photos");
            LinkedList<PhotoData> photos_out = new LinkedList<>();
            for (int j = 0; j < photos.length(); j++) {
                JSONObject photo = photos.getJSONObject(j);
                String small = getJSONStringNulls(photo, "small");
                String medium = getJSONStringNulls(photo, "medium");
                String large = getJSONStringNulls(photo, "large");
                String full = getJSONStringNulls(photo, "full");

                PhotoData photoData = new PhotoData(small, medium, large, full);
                photos_out.add(photoData);
            }

            PetData petData = new PetData(id, type, species, name, description,
                    breedPrimary, breedSecondary, breedIsMixed, breedIsUnknown,
                    colourPrimary, colourSecondary, colourTertiary,
                    age, birthDate, sex, size, coat,
                    isSpayedOrNeutered, isHouseTrained, isDeclawed, isSpecialNeeds,
                    isShotsCurrent, isFriendlyToChildren, isFriendlyToDogs, isFriendlyToCats,
                    photos_out);
            allPetData.add(petData);
        }

        // Write to SQL file
        try {
            FileWriter writer = new FileWriter("pets.sql");

            // Write PetData
            for (PetData petData : allPetData) {
                writer.write(petData.toSQLPet());
            }

            writer.write("\n");

            // Write PhotoData
            for (PetData petData : allPetData) {
                writer.write(petData.toSQLPhotos());
            }

            writer.close();
        } catch (IOException e) {
            System.out.println("Error writing file");
            e.printStackTrace();
        }
    }

    private static String getJSONStringNulls(JSONObject obj, String key) {
        return obj.isNull(key)? null: obj.getString(key);
    }

    private static Boolean getJSONBooleanNulls(JSONObject obj, String key) {
        return obj.isNull(key)? null: obj.getBoolean(key);
    }
}
