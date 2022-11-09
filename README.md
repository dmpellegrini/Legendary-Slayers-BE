# Legendary-Slayers-BE

Welcome to the back end of the Legendary Slayers MERN stack. This API supplies this the following front end website. You can check it out at the following link.
<!-- Link -->
[Legendary-Slayers-FE](https://github.com/durlinlin/Legendary-Slayers-FE)
(Front End) repo.

## Where The Data Was Retrieved From 

Riot games, the owner of League Of Legends, has a protracted process for approving the use of their official API, but much of the data can be retrieved by reviewing the following part of their website

<!-- Link -->
[click here for documentation and API inspiration](https://developer.riotgames.com/docs/lol)

## The Goals Of This Back End

Many of the image and data assets associated with the hundreds of LOL Champions and Items, are not easily accessible through the provided API endpoints within the above link. Thus we built our own API for quick access to the assets that we desired for our the front end REACT APP.

## CRUD Capabilities

Although the backend database collections of Champions and Items are static and immutable to the front end user, the Users themselves have full CRUD.  The Users themselves are able to be created, deleted and updated. In addition, the users are also able to add favorite Champions and Items to their profiles.

## Endpoints

PLEASE NOTE THAT ALL ENDPOINTS ARE CASE SENSITIVE!!!

### The Root Endpoint

The following is the root endpoint. It will simply display the message "Welcome To The Legendary Slayers Unofficial League Of Legends Rest API!"

<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app](https://legendary-slayers-be-production.up.railway.app)

The end point routes are divided into 3 sub categories

- Champions
- Items
- Users

## Champions

The root of all "Champions" endpoints is the following
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/champions](https://legendary-slayers-be-production.up.railway.app/champions)

This will simply display a message saying "This is the Champion Root" 

### All Champions

To return the data for all Champions in the database, append "all" to the champions root endpoint 
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/champions/all](https://legendary-slayers-be-production.up.railway.app/champions/all)

### Champion Based On Name

To Retrieve a Champion's data by name, append "/name" followed by "/<champion_name>" to the champions endpoint. As an example, the following endpoint will lead you to the Champion "Aatrox
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/champions/name/Aatrox](https://legendary-slayers-be-production.up.railway.app/champions/Aatrox)


### Champion Based On Tag

To Retrieve a Champion's data by tag, append "/tag" followed by "/<tag_name>" to the champions endpoint. As an example, the following endpoint will lead you to all Champions that are Assassins. 
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/champions/tag/Assassin](https://legendary-slayers-be-production.up.railway.app/champions/tag/Assassin)

### Champion Based On Two Tags

To Retrieve a Champion's data by tag, append "/tag" followed by "/<tag_name>" again followed by "/<tag_name> to the champions endpoint. As an example, the following endpoint will lead you to all Champions that are Assassins and Mages. 
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/champions/tag/Assassin/Mage](https://legendary-slayers-be-production.up.railway.app/champions/tag/Assassin/Mage)

### Champion Based On Partype

To Retrieve a Champion's data by Partype, append /partype followed by "/<partype_name>". For example the following endpoint returns all champions with the partype of energy.
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/champions/partype/Energy](https://legendary-slayers-be-production.up.railway.app/champions/partype/Energy)


## Items 

The root of all "Items" endpoints is the following
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/items](https://legendary-slayers-be-production.up.railway.app/items)

This will simply display a message saying "This is the Item Root" 

### All Items

To return the data for all Champions in the database, append "all" to the items root endpoint
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/items/all](https://legendary-slayers-be-production.up.railway.app/items/all)

### Items By Name

To return the data for a single item by name, append "/name" followed by "/item_name" to the items endpoint.  For example the following endpoint retrieves, Faerie Charm.
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/items/name/Faerie Charm](https://legendary-slayers-be-production.up.railway.app/items/name/Faerie Charm)

### Items By Tag

To return the data for all the items with a particular tag, append "/tags" followed by "/<tag_name>" to the items endpoint.  For example the following endpoint retrieves, all the items with ManaRegen as a tag.
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/items/tags/ManaRegen](https://legendary-slayers-be-production.up.railway.app/items/tags/ManaRegen)

You can also chain up to six tags together to narrow down your search. For example, the following search with give you an item with SpellBlock, ManaRegen, Active, CooldownReduction, Tenacity, and AbilityHaste
<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/items/tags/SpellBlock/ManaRegen/Active/CooldownReduction/Tenacity/AbilityHaste](https://legendary-slayers-be-production.up.railway.app/items/tags/SpellBlock/ManaRegen/Active/CooldownReduction/Tenacity/AbilityHaste)

### Items By Base Price

To return an items data based on base price, simply append "/base_price" followed by "/<number_>. To get all the items with a base price below the number entered. For example, the following will return all items with a base price below 500.

<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/items/base_price/500](https://legendary-slayers-be-production.up.railway.app/items/base_price/500)

### Items By Total Price

To return an items data based on total price, simply append "/total_price" followed by "/<number_>. To get all the items with a total price below the number entered. 

<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/items/total_price/100](https://legendary-slayers-be-production.up.railway.app/items/total_price/100)

### Items By Sell Price

To return an items data based on sell price, simply append "/sell_price" followed by "/<number_>. To get all the items with a sell price above the number entered. 

<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/items/total_price/100](https://legendary-slayers-be-production.up.railway.app/items/total_price/100)

## Users

To return an items data based on sell price, simply append "/sell_price" followed by "/<number_>. To get all the items with a sell price above the number entered. 

<!-- Link -->
[https://legendary-slayers-be-production.up.railway.app/items/total_price/100](https://legendary-slayers-be-production.up.railway.app/items/total_price/100)
