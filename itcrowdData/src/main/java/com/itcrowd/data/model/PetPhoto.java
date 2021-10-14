package com.itcrowd.data.model;

import javax.persistence.*;

@Entity
@Table(name = "PET_PHOTO")
public class PetPhoto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "PID")
    private int pid;

    @Column(name = "PhotoSmall")
    private String photoSmall;

    @Column(name = "PhotoMedium")
    private String photoMedium;

    @Column(name = "PhotoLarge")
    private String photoLarge;

    @Column(name = "PhotoFull")
    private String photoFull;

    public PetPhoto() {

    }

    public PetPhoto(int pid, String photoSmall, String photoMedium, String photoLarge, String photoFull) {
        this.pid = pid;
        this.photoSmall = photoSmall;
        this.photoMedium = photoMedium;
        this.photoLarge = photoLarge;
        this.photoFull = photoFull;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getPhotoSmall() {
        return photoSmall;
    }

    public void setPhotoSmall(String photoSmall) {
        this.photoSmall = photoSmall;
    }

    public String getPhotoMedium() {
        return photoMedium;
    }

    public void setPhotoMedium(String photoMedium) {
        this.photoMedium = photoMedium;
    }

    public String getPhotoLarge() {
        return photoLarge;
    }

    public void setPhotoLarge(String photoLarge) {
        this.photoLarge = photoLarge;
    }

    public String getPhotoFull() {
        return photoFull;
    }

    public void setPhotoFull(String photoFull) {
        this.photoFull = photoFull;
    }

    @Override
    public String toString() {
        return "Photo (Pet #" + this.pid + "): " + "\"" + this.photoFull + "\"";
    }
}
