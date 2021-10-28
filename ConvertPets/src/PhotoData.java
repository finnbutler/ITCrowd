import javax.json.*;

/**
 * Class for storing photo data from JSON and outputting as SQL.
 */
public class PhotoData {
    private String small;
    private String medium;
    private String large;
    private String full;

    public PhotoData(String small, String medium, String large, String full) {
        this.small = small;
        this.medium = medium;
        this.large = large;
        this.full = full;
    }

    public JsonObject toJsonObject() {
        JsonObject json = Json.createObjectBuilder()
                .add("PhotoFull", this.full)
                .add("PhotoLarge", this.large)
                .add("PhotoMedium", this.medium)
                .add("PhotoSmall", this.small)
                .build();
        return json;
    }

    public String getFull() {
        return this.full;
    }

    @Override
    public String toString() {
        return "\"" + this.small + "\", \"" + this.medium + "\", \"" + this.large + "\", \"" + this.full+ "\"";
    }
}
