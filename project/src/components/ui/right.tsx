import { FollowItem } from "@/components/right/follow-item"
import { followList } from "@/data/followList"

export const Right = () => {
    return(
        <div className="max-w-[270px] text-white w-full ml-7 py-4">
            <FollowItem 
                avatar="/avatars/1.jpg"
                userName="Emanuel"
                fullName="Emanuel de Brito"
                isMe
            />

            <div className="flex justify-between items-center my-3 font-semibold">
                <p className="text-[14px] text-gray-500">Sugestões para você</p>
                <span className="text-[12px] text-white">Ver tudo</span>
            </div>

            <div className="flex flex-col gap-4">
                {followList.map((item, index) => (
                    <FollowItem 
                        key={index}
                        avatar={item.avatar}
                        userName={item.userName}
                        fullName={item.fullName}
                    />
                ))}
            </div>
        </div>
    )
}