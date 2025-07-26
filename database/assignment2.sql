INSERT INTO public.account(account_firstname, account_lastname, account_email)
VALUES ('Tony', 'Stark', 'tony@starknet.com');

UPDATE public.account
SET account_type ='Admin'
WHERE account_email = 'tony@starknet.com';

DELETE FROM public.account
WHERE account_email = 'tony@starknet.com';

UPDATE public.inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

SELECT inventory.inv_make, inventory.inv_model, classification.classification_name
FROM public.inventory
INNER JOIN public.classification 
	ON inventory.classification_id = classification.classification_id
WHERE classification.classification_name = 'Sport';


UPDATE public.inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
