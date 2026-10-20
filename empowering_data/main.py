# This code is written in python
# The pandas library is used for data processing and to read data files
import pandas as pd 
#The matplotlib library is used to plot histograms and scatter plots
import matplotlib.pyplot as plt
# The GWCutilities has functions to help format data printed to the console
import GWCutilities as util

# Read a comma separated values (CSV) files into a variable
# as a pandas DataFrame
lwd=pd.read_csv("livwell135.csv")

print("Setting: Honduras")
print("Our data focuses on Honduras and explores the relationship between women's literacy and their desired number of children.")
print()

input("Press Enter to continue...\n")

print("Characters: The women represented in this data are women living in Honduras.")
print("The data looks at the percentage of women who are literate and the average ideal number of children they would like to have.")
print()

input("Press Enter to continue...\n")

print("Context: We are investigating whether women's literacy levels are related to the number of children they ideally want.")
print("The scatterplot allows us to compare literacy percentages with the average desired number of children in Honduras.")
print()

input("Press Enter to see the data visualization...\n")

# Get a list of all countries
listOfCountries = lwd["country_name"].unique()
# print(util.vformat_list(listOfCountries))

# Filter data 
oneCountryBooleanList = lwd["country_name"] == "Honduras"
oneCountryData = lwd.loc[oneCountryBooleanList]

# Filter data even more
combinedBooleanList = (
    (lwd["country_name"] == "Honduras") &
    (lwd["FP_desired_mean"] >= 0) &
    (lwd["FP_desired_mean"] <= 10) &
    (lwd["ED_litt_p"] >= 20) &
    (lwd["ED_litt_p"] <= 100)
)
combinedData = lwd.loc[combinedBooleanList]

# Create scatterplot

plt.scatter(
    combinedData["ED_litt_p"],
    combinedData["FP_desired_mean"]
)

plt.title("Women's Literacy vs. Desired Number of Children in Honduras")
plt.xlabel("Women Who Are Literate (%)")
plt.ylabel("Average Ideal Number of Children for All Women")

plt.show()

print("\nResearch Question: Is there a relationship between women's literacy and the average ideal number of children in Honduras?")
print("\nThe World Bank's 2026 Honduras Gender Data Landscape reports that 40.2% of women completed lower secondary education in Honduras in 2024.")
print("\nBut what about the 59.8% of women who did not receive this level of education?")
