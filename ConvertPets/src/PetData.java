import org.json.JSONObject;

import javax.json.*;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

/**
 * Class for storing pet data from JSON and outputting as SQL.
 */
public class PetData {
    private int id;

    private String type;
    private String species;
    private String name;
    private String description;

    private String breedPrimary;
    private String breedSecondary;
    private Boolean breedIsMixed;
    private Boolean breedIsUnknown;

    private String colourPrimary;
    private String colourSecondary;
    private String colourTertiary;

    private String age;
    private String birthDate;
    private String sex;
    private String size;
    private String coat;

    private Boolean isSpayedOrNeutered;
    private Boolean isHouseTrained;
    private Boolean isDeclawed;
    private Boolean isSpecialNeeds;
    private Boolean isShotsCurrent;
    private Boolean isFriendlyToChildren;
    private Boolean isFriendlyToDogs;
    private Boolean isFriendlyToCats;

    private List<PhotoData> photos;

    public PetData(int id, String type, String species, String name, String description,
                   String breedPrimary, String breedSecondary, Boolean breedIsMixed, Boolean breedIsUnknown,
                   String colourPrimary, String colourSecondary, String colourTertiary,
                   String age, String birthDate, String sex, String size, String coat,
                   Boolean isSpayedOrNeutered, Boolean isHouseTrained, Boolean isDeclawed, Boolean isSpecialNeeds,
                   Boolean isShotsCurrent, Boolean isFriendlyToChildren, Boolean isFriendlyToDogs, Boolean isFriendlyToCats,
                   List<PhotoData> photos) {
        this.id = id;

        this.type = type;
        this.species = species;
        this.name = name;
        this.description = description;

        this.breedPrimary = breedPrimary;
        this.breedSecondary = breedSecondary;
        this.breedIsMixed = breedIsMixed;
        this.breedIsUnknown = breedIsUnknown;

        this.colourPrimary = colourPrimary;
        this.colourSecondary = colourSecondary;
        this.colourTertiary = colourTertiary;

        this.age = age;
        this.birthDate = birthDate;
        this.sex = sex;
        this.size = size;
        this.coat = coat;

        this.isSpayedOrNeutered = isSpayedOrNeutered;
        this.isHouseTrained = isHouseTrained;
        this.isDeclawed = isDeclawed;
        this.isSpecialNeeds = isSpecialNeeds;
        this.isShotsCurrent = isShotsCurrent;
        this.isFriendlyToChildren = isFriendlyToChildren;
        this.isFriendlyToDogs = isFriendlyToDogs;
        this.isFriendlyToCats = isFriendlyToCats;

        this.photos = photos;
    }

    public void populateBlankValues() {

    }

    public void trimPetDescription() {
        if (this.description != null) {
            int newlineIndex = -1;
            char[] descChars = this.description.trim().toCharArray();
            for (int i = 0; i < descChars.length; i++) {
                if (descChars[i] == '\n') {
                    newlineIndex = i;
                    break;
                }
            }

            if (newlineIndex != -1 && newlineIndex != descChars.length - 1) {
                // Check for trim
                String[] fragments = this.description.split("\n");
                String[] startWords = fragments[0].split("\\W+");

                if (startWords.length < 4) {
                    // Remove start words
                    char[] newChars = Arrays.copyOfRange(descChars, newlineIndex + 1, descChars.length);
                    this.description = new String(newChars).trim();
                }
            }
        } else {
            this.description = "This pet is just a totally awesome dude and words cannot describe how cool they are!";
        }
    }

    public void jsonAddOrNull(JsonObjectBuilder json, String tag, Boolean val) {
        if (val == null) {
            json.add(tag, JsonValue.NULL);
        } else {
            json.add(tag, val);
        }
    }

    public void jsonAddOrNull(JsonObjectBuilder json, String tag, String val) {
        if (val == null) {
            json.add(tag, JsonValue.NULL);
        } else {
            json.add(tag, val);
        }
    }

    public JsonObject toJsonObject() {
        JsonObjectBuilder json = Json.createObjectBuilder();
        jsonAddOrNull(json, "Age", this.age);
        jsonAddOrNull(json, "BreedIsMixed", this.breedIsMixed);
        jsonAddOrNull(json, "BreedIsUnknown", this.breedIsUnknown);
        jsonAddOrNull(json, "BreedPrimary", this.breedPrimary);
        jsonAddOrNull(json, "Coat", this.coat);
        jsonAddOrNull(json, "ColourPrimary", this.colourPrimary);
        jsonAddOrNull(json, "CreationTime", LocalDateTime.now().toString());
        jsonAddOrNull(json, "Description", this.description);
        jsonAddOrNull(json, "IsDeclawed", this.isDeclawed);
        jsonAddOrNull(json, "isFriendlyToCats", this.isFriendlyToCats);
        jsonAddOrNull(json, "isFriendlyToDogs", this.isFriendlyToDogs);
        jsonAddOrNull(json, "isHouseTrained", this.isHouseTrained);
        jsonAddOrNull(json, "isShotsCurrent", this.isShotsCurrent);
        jsonAddOrNull(json, "isSpayedOrNeutered", this.isSpayedOrNeutered);
        jsonAddOrNull(json, "isSpecialNeeds", this.isSpecialNeeds);
        jsonAddOrNull(json, "Name", this.name);
        jsonAddOrNull(json, "Sex", this.sex);
        jsonAddOrNull(json, "Size", this.size);
        jsonAddOrNull(json, "Species", this.species);
        jsonAddOrNull(json, "Type", this.type);
        json.add("PhotoFull", this.photos.get(0).getFull());
        json.add("PetPhotos", photosTOJson());
        json.add("ID", this.id);
        return json.build();
    }

    public JsonArray photosTOJson() {
        JsonArrayBuilder json = Json.createArrayBuilder();

        for (PhotoData photo : this.photos) {
            json.add(photo.toJsonObject());
        }

        return json.build();
    }

    public String toSQLPet() {
        return "INSERT into PET (ID, AgID, CreationTime, Type, Species, Name, Description, BreedPrimary, BreedSecondary, " +
                "BreedIsMixed, BreedIsUnknown, ColourPrimary, ColourSecondary, ColourTertiary, Age, BirthDate, Sex, Size, Coat, IsSpayedOrNeutered, " +
                "IsHouseTrained, IsDeclawed, IsSpecialNeeds, IsShotsCurrent, IsFriendlyToChildren, IsFriendlyToDogs, IsFriendlyToCats) " +
                "values (" + this.id + ", NULL, DEFAULT, " + printNullOrString(this.type) + ", " + printNullOrString(this.species) + ", " + printNullOrString(this.name)  + ", " +
                printNullOrString(this.description) + ", " + printNullOrString(this.breedPrimary) + ", " + printNullOrString(this.breedSecondary) + ", " + this.breedIsMixed + ", " +
                this.breedIsUnknown + ", " + printNullOrString(this.colourPrimary) + ", " + printNullOrString(this.colourSecondary) + ", " + printNullOrString(this.colourTertiary) + ", " +
                printNullOrString(this.age) + ", " + printNullOrString(this.birthDate) + ", " + printNullOrString(this.sex) + ", " + printNullOrString(this.size) + ", " + printNullOrString(this.coat) + ", " + this.isSpayedOrNeutered + ", " +
                this.isHouseTrained + ", " + this.isDeclawed + ", " + this.isSpecialNeeds + ", " + this.isShotsCurrent + ", " +
                this.isFriendlyToChildren + ", " + this.isFriendlyToDogs + ", " + this.isFriendlyToCats + ");\n";
    }

    public String toSQLPhotos() {
        StringBuilder statements = new StringBuilder();
        for (PhotoData photo : this.photos) {
            statements.append("INSERT into PET_PHOTO (ID, PID, PhotoSmall, PhotoMedium, PhotoLarge, PhotoFull) values (DEFAULT, " +
                    this.id + ", " + photo.toString() + ");\n");
        }
        return statements.toString();
    }

    private String printNullOrString(String in) {
        return (in == null)? "NULL": "\"" + in + "\"";
    }

    public int getId() {
        return this.id;
    }

    public List<PhotoData> getPhotos() {
        return this.photos;
    }

    @Override
    public String toString() {
        StringBuilder out = new StringBuilder();

        out.append("Pet:").append("\n");
        out.append("    Type: ").append(this.type).append("\n");
        out.append("    Species: ").append(this.species).append("\n");
        out.append("    Name: ").append(this.name).append("\n");
        out.append("    Description: ").append(this.description).append("\n");

        out.append("    Primary Breed: ").append(this.breedPrimary).append("\n");
        out.append("    Secondary Breed: ").append(this.breedSecondary).append("\n");
        out.append("    Mixed Breed: ").append(this.breedIsMixed).append("\n");
        out.append("    Unknown Breed: ").append(this.breedIsUnknown).append("\n");

        out.append("    Primary Colour: ").append(this.colourPrimary).append("\n");
        out.append("    Secondary Colour: ").append(this.colourSecondary).append("\n");
        out.append("    Tertiary Colour: ").append(this.colourTertiary).append("\n");

        out.append("    Age: ").append(this.age).append("\n");
        //out.append("    Birth Date: ").append(this.birthDate).append("\n");
        out.append("    Sex: ").append(this.sex).append("\n");
        out.append("    Size: ").append(this.size).append("\n");
        out.append("    Coat: ").append(this.coat).append("\n");

        out.append("    Spayed/Neutered: ").append(this.isSpayedOrNeutered).append("\n");
        out.append("    House Trained: ").append(this.isHouseTrained).append("\n");
        out.append("    Declawed: ").append(this.isDeclawed).append("\n");
        out.append("    Has Special Needs: ").append(this.isSpecialNeeds).append("\n");
        out.append("    Shots Current: ").append(this.isShotsCurrent).append("\n");

        out.append("    Friendly to Children: ").append(this.isFriendlyToChildren).append("\n");
        out.append("    Friendly to Dogs: ").append(this.isFriendlyToDogs).append("\n");
        out.append("    Friendly to Cats: ").append(this.isFriendlyToCats).append("\n");

        out.append("    Photos: ").append(this.photos).append("\n");

        return out.toString();
    }

    public String toCriticalString() {
        StringBuilder out = new StringBuilder();

        out.append("Lil' Babyy:").append("\n");
        out.append("    Name: ").append(this.name).append("\n");
        out.append("    Photos: ").append(this.photos).append("\n");

        return out.toString();
    }
}
