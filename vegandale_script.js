//following tutorial by Lauren Orsini
//found at https://readwrite.com/2014/08/29/chrome-extension-build-your-own-caaaaarbs/

walk(document.body);

function walk(node)
{
	var child, next;

	switch(node.nodeType)
	{
		case 1:
		case 9:
		case 11:
				child = node.firstChild;
				while (child)
				{
					next = child.nextSibling;
					walk(child)
					child = next;
				}
				break;
		case 3:
				handleText(node);
				break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bVegandale\b/g, "Gentrified Parkdale");
	v = v.replace(/\bvegandale\b/g, "Gentrified Parkdale");
	v = v.replace(/\b#vegandale\b/g, "#GentrifiedParkdale");
	v = v.replace(/\b#Vegandale\b/g, "#GentrifiedParkdale");

	textNode.nodeValue = v;
}


