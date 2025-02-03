import { AvatarsCarousel } from "@/components/main/avatars-carousel"
import { PostItem } from "@/components/main/post-item"
import { postList } from "@/data/postList"

export const Main = () => {
    return(
        <main className="max-w-[500px] py-6">
			<AvatarsCarousel />

			<div className="mt-6">
				{postList.map((post, index) => (
					<PostItem 
						key={index}
						avatar={post.avatar}
						userName={post.userName}
						image={post.image}
					/>
				))}
			</div>
		</main>
    )
}