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

    @Override
    public String toString() {
        return "\"" + this.small + "\", \"" + this.medium + "\", \"" + this.large + "\", \"" + this.full+ "\"";
    }
}
