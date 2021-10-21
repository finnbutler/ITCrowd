package com.itcrowd.data.model;

import javax.persistence.*;

/**
 * Model for storing account data.
 */
@Entity
@Table(name = "TEST_ACCOUNT")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "PasswordHash")
    private String passwordHash;

    @Column(name = "HashAlgorithm")
    private String hashAlgorithm;

    //@Column(name = "CreationTime")
    //private

    @Column(name = "Email")
    private String email;

    @Column(name = "Phone")
    private String phone;

    @Column(name = "FirstName")
    private String firstName;

    @Column(name = "LastName")
    private String lastName;

    @Column(name = "Postcode")
    private String postcode;

    //@Column(name = "DOB")
    //private

    @Column(name = "Gender")
    private String gender;

    //@Column(name = "Picture")
    //private

    @Column(name = "Biography")
    private String biography;

    public Account() {

    }

    public Account(String passwordHash, String hashAlgorithm, String email, String phone, String firstName, String lastName, String postcode, String gender, String biography) {
        this.passwordHash = passwordHash;
        this.hashAlgorithm = hashAlgorithm;
        this.email = email;
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
        this.postcode = postcode;
        this.gender = gender;
        this.biography = biography;
    }

    public int getId() {
        return id;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getHashAlgorithm() {
        return hashAlgorithm;
    }

    public void setHashAlgorithm(String hashAlgorithm) {
        this.hashAlgorithm = hashAlgorithm;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    @Override
    public String toString() {
        return "Account [ID: " + id + ", FirstName:" + firstName + "]";
    }
}
