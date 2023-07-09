import React, { useEffect } from "react";
import axios from "axios";
import InputEmoji from 'react-input-emoji'
import { async } from "q";

const CommentSection = ({ placeId }) => {
    const [postText, setPostText] = React.useState("");
    const [Comments, setComments] = React.useState(null);
    const baseURL = `https://mrsz.pythonanywhere.com/place/plaace/Place/${placeId}/comments/`;
    useEffect(() => {
        getComments();
    }, []);

    async function getComments() {
        axios
            .get(baseURL, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("acctoken")}`,
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res.data);
                setComments(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    const handlePost = () => {
        console.log(postText);
        axios
            .post(
                baseURL,
                {
                    text: postText,
                },
                {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem(
                            "acctoken"
                        )}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                setPostText("");
                getComments();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className=" comment-section overflow-y-auto flex flex-col gap-2 py-3 px-5  w-full h-[30rem] ">
                {((Comments === null || Comments.length === 0) && (
                    <p>no comments</p>
                )) ||
                    Comments.map((c) => (
                        <div className="comment-bg rounded-xl h-fit flex flex-col pt-0 divide-y divide-pallate-persian_green">
                            <div className="flex flex-row gap-2 mb-2 p-2 items-center justify-start rounded-t-xl ">
                                <p className="text-gray-700 text-xl">
                                    @{c.user.username}
                                </p>
                            </div>
                            <div className="p-2">
                                <p className="text-gray-700 text-lg w-[303px] h-fit ">
                                    {c.text}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="flex flex-row px-5 gap-4 mt-3">
                <div class="w-full mb-4 rounded-lg comment-bg   ">
                    <div class="px-4 py-2 comment-bg rounded-t-lg dark:bg-gray-800">
                        <textarea
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            id="comment"
                            rows="2"
                            class="w-full px-0 text-lg text-gray-700 comment-bg border-0 focus:ring-3 focus:ring-pallate-persian_green"
                            placeholder="Write a comment..."
                            required
                        ></textarea>
                        {/* <InputEmoji
                            
                            value={postText}
                            onChange={setPostText}
                            id="comment"
                            class="w-full px-0 text-lg text-gray-700 comment-bg border-0 focus:ring-3 focus:ring-pallate-persian_green"
                            placeholder="Write a comment..."
                        /> */}
                    </div>
                    <div class="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
                        <button
                            onClick={handlePost}
                            disabled={postText.length === 0}
                            type="submit"
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-pallate-persian_green rounded-lg focus:ring-4 focus:ring-blue-200 disabled:bg-gray-600 disabled:hover:bg-gray-600 hover:bg-pallate-blue_munsell"
                        >
                            Post comment
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommentSection;
