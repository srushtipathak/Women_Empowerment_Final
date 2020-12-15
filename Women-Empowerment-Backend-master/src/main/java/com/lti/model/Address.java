package com.lti.model;

import javax.persistence.Embeddable;

@Embeddable
public class Address {

	private String address1;
	private String address2;
	private String city;
	private String state;
	private int zipCode;
	private String country;

	public Address() {

	}

	public Address(String address1, String address2, String city, String state, int zipCode, String country) {
		this.address1 = address1;
		this.address2 = address2;
		this.city = city;
		this.state = state;
		this.zipCode = zipCode;
		this.country = country;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getZipCode() {
		return zipCode;
	}

	public void setZipCode(int zipCode) {
		this.zipCode = zipCode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return address1 + ",\n" + address2 + ",\n" + city + " " + state + " - " + zipCode + ",\n" + country;
	}

}
