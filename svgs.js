
function make_tree(root_selector, cx, cy, r, new_group_id=''){

    // Draw Tree Trunk
    var treeTrunk = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
    treeTrunk.setAttribute("d",`M${cx},${cy} ${cx},${cy-6}`); //Set path's data
    treeTrunk.style.stroke = "#765c48"; //Set stroke colour
    treeTrunk.style.strokeWidth = "1px"; //Set stroke width
    treeTrunk.classList.add("treeTrunk");

    // Draw Tree Top
    var treeTop = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
    treeTop.setAttribute('cy', cy-6);
    treeTop.setAttribute('cx', cx);
    treeTop.setAttribute('r', r);
    treeTop.style.fill = "green";
    treeTop.classList.add("treeTop");

    // palce_svg should take third param as optional, check for/make container element
    if(new_group_id == '')
    {
        place_svg(root_selector, treeTrunk);
        place_svg(root_selector, treeTop);
    }
    else
    {
        // console.log(`Creating container element with new_group_id: ${new_group_id}`)
        var new_group = document.createElementNS("http://www.w3.org/2000/svg", 'g'); 
        place_svg(root_selector, new_group, new_group_id)

        var new_group_selector = `#${new_group_id}`
        place_svg(new_group_selector, treeTrunk);
        place_svg(new_group_selector, treeTop);
    }
}

function make_muni(root_selector, cx, cy)
{

}

function make_generic_building(root_selector, x, y, height, width, amount_of_windows)
{
    
}
