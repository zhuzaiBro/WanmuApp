import { VirtualizedList } from "react-native";

export default function DynamicList({DATA, getItemCount, getItem, renderItem}) {


    
    return (
        <VirtualizedList
                style={{ backgroundColor: "#fff" }}
                showsVerticalScrollIndicator={false}
                disableVirtualization
                data={DATA}
                initialNumToRender={12}
               renderItem={renderItem}
                keyExtractor={(item : any)=> item.id}
                getItemCount={getItemCount}
                getItem={getItem}
            />
    )
}
