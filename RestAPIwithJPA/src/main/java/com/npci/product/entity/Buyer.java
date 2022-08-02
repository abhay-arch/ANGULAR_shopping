package com.npci.product.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="BUYER")
public class Buyer {

	@Id	
	@Column(name="CATEGORYID") 
	private int categoryid ;
	
	@Column(name=" PRODUCTNAME") 
	private int productname;
	
	@Column(name="UNITPRICE") 
	private int uniteprice;
	
	@Column(name="imageurl") 
	private int imageurl;

	public Buyer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Buyer(int categoryid, int productname, int uniteprice, int imageurl) {
		super();
		this.categoryid = categoryid;
		this.productname = productname;
		this.uniteprice = uniteprice;
		this.imageurl = imageurl;
	}

	public int getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(int categoryid) {
		this.categoryid = categoryid;
	}

	public int getProductname() {
		return productname;
	}

	public void setProductname(int productname) {
		this.productname = productname;
	}

	public int getUniteprice() {
		return uniteprice;
	}

	public void setUniteprice(int uniteprice) {
		this.uniteprice = uniteprice;
	}

	public int getImageurl() {
		return imageurl;
	}

	public void setImageurl(int imageurl) {
		this.imageurl = imageurl;
	}
	
	
}
