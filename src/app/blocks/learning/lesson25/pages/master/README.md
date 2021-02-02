    <ion-list #itemList>
    	<ion-item-sliding *ngFor="let item of items" #slidingItem>
    		<!-- <ion-item routerLink="/details/{{item.id}}"> -->
    		<ion-item (click)="navigateTo(item)">
    			<ion-label>
    				<h3>{{item}}</h3>
    			</ion-label>
    		</ion-item>
    		<ion-item-options>
    			<ion-item-option color="favorite" (click)="addFavorite(slidingItem, item)">
    				Favorite
    			</ion-item-option>
    			<ion-item-option
    				color="danger"
    				(click)="removeFavorite(slidingItem, item, 'Remove Favorite')"
    			>
    				Remove
    			</ion-item-option>
    		</ion-item-options>
    	</ion-item-sliding>
    </ion-list>
