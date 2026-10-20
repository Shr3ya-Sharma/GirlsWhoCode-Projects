#Talking Data Starter Code

#Part 2 Setting up the program
import pandas as pd
import matplotlib.pyplot as plt

pd.set_option('display.max_columns', None)
pd.set_option('max_colwidth', None)

movieData = pd.read_csv('./rotten_tomatoes_movies.csv')
favMovie = "Parasite (Gisaengchung)"
print("My favorite movie is " + favMovie + "!")



#Part 3 Investigate the data
# print(movieData.head())
# print(movieData["movie_title"])

#Part 4 Filter data
print("\nThe data for my favorite movie is:\n")
#Create a new variable to store your favorite movie information

favMovieList = movieData["movie_title"] == favMovie
# print(favMovieList)
favMovieData = movieData.loc[favMovieList]
print(favMovieData)


print("\n\n")

#Create a new variable to store a new data set with a certain genre
dramaMovieList = movieData["genres"].str.contains("Drama")
dramaMovieData = movieData.loc[dramaMovieList]


numOfMovies = dramaMovieData.shape[0]

print("We will be comparing " + favMovie +
      " to other movies under the genre Drama in the data set.\n")
print("There are " + str(numOfMovies) + " movies under the category Drama.")

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
input("Press enter to see more information about how " + favMovie +
      " compares to other movies in this genre.\n")

#Part 5 Describe data
#min
min = dramaMovieData["audience_rating"].min()
print("The min audience rating of the data set is: " + str(min))
print(favMovie + " is rated " + str(favMovieData["audience_rating"].iloc[0] - min) + " points higher than the lowest rated movie.")

#find max
max = dramaMovieData["audience_rating"].max()
print("The max audience rating of the data set is: " + str(max))
print(favMovie + " is rated " + str(max -favMovieData["audience_rating"].iloc[0]) + " points lower than the highest rated movie.")

print()

#find mean
mean = dramaMovieData["audience_rating"].mean()
print("The mean audience rating of the data set is: " + str(mean))
if favMovieData["audience_rating"].iloc[0] > mean:
    print(favMovie + " is higher than the mean movie rating.")
elif favMovieData["audience_rating"].iloc[0] < mean:
    print(favMovie + " is lower than the mean movie rating.")
else:
    print(favMovie + " is the same as the mean movie rating.")

#find median
median = dramaMovieData["audience_rating"].median()
print("The median audience rating of the data set is: " + str(median))
if favMovieData["audience_rating"].iloc[0] > median:
    print(favMovie + " is higher than the median movie rating.")
elif favMovieData["audience_rating"].iloc[0] < median:
    print(favMovie + " is lower than the median movie rating.")
else:
    print(favMovie + " is the same as the median movie rating.")

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
input("Press enter to see data visualizations.\n")

#Part 6 Create graphs
#Create histogram
plt.hist(dramaMovieData["audience_rating"], range = (0, 100), bins = 20)

#Adds labels and adjusts histogram
plt.grid(True)
plt.title("Audience Ratings of Drama Movies (Histogram)")
plt.xlabel("Audience Ratings")
plt.ylabel("Number of Drama Movies")

#Prints interpretation of histogram
print("According to the histogram, the number of drama movies has a direct, positive relationship with audience ratings. The mean and median audience ratings, which have already been previously established, are visible here.")
print("View the histogram in the console! Use your cursor to minimize/maximize it.")

#Show histogram
plt.show()
input("Press enter to see the next data visualization.\n")
plt.close()

#Create scatterplot
plt.scatter(data = dramaMovieData, x = "audience_rating", y = "critic_rating")
#Adds labels and adjusts scatterplot
plt.grid(True)
plt.title("Audience Rating vs. Critic Rating")
plt.xlabel("Audience Rating")
plt.ylabel("Critic Rating")
plt.xlim(0, 100)
plt.ylim(0, 100)

#Prints interpretation of scatterplot
print("According to the scatter plot, there is a positive correlation between audience and critic ratings! There are many data points, so the plots appear clustered. Notable patterns include media with critic ratings of zero, but varied audience ratings, and on the opposite end, media with varied audience ratings, yet critic ratings of 100!")
print("Just as before, view the histogram in the console! Use your cursor to minimize/maximize it.")

#Show scatterplot
plt.show()

print("\nThank you for reading through my data analysis!")
