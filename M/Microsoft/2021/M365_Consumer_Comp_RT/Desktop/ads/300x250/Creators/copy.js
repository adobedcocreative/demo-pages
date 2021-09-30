// JavaScript Document
	//  TEXT, TEXTSIZE, XPOS, YPOS, LINE SPACING, LINE WIDTH, JUSTIFYTEXT
	// use | for new line.  Use <#FFFFFF> for color change.
	// when this occurs you can use line height to adjust line spacing.
	// lineWidth is no longer needed.
	var bannerData = new Object()
		
	bannerData.headline1 = ["<#505050>Make the |most of|your time","18.2px",17,43,"20","350", "left"];
	bannerData.headline2 = ["<#505050>Easily create amazing |content fast with |premium Office apps","12px",17,110,"14","350", "left"];


	bannerData.CTA = ["<#FFFFFF>Learn more","14.2px",0,0,"50","300", "left"];
	
	//	You can easily change the width of the CTA, scale the X width amount, default is 100%, also adjust X Y  offset position
	bannerData.CTAsize = [100,-11,0];
	//  Do you want arrow to be visible? And move the arrow if you want to using X/Y offset values.
	bannerData.CTAarrowVisible = [true, 11,0]