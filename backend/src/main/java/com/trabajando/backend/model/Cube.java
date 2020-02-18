package com.trabajando.backend.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cube")
public class Cube {

	@Id
	private String _id;
	private Float alto;
	private Float ancho;
	private Float fondo;
	private LocalDate date;

	public Cube() {
	}

	public Cube(Float alto, Float ancho, Float fondo) {
		this.alto = alto;
		this.ancho = ancho;
		this.fondo = fondo;

	}

	public String get_id() {
		return this._id;
	}

	public void set_id(String id) {
		this._id = id;
	}

	public Float getAlto() {
		return alto;
	}

	public void setLargo(Float alto) {
		this.alto = alto;
	}

	public Float getAncho() {
		return ancho;
	}

	public void setAncho(Float ancho) {
		this.ancho = ancho;
	}

	public Float getFondo() {
		return fondo;
	}

	public void setFondo(Float fondo) {
		this.fondo = fondo;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

}
